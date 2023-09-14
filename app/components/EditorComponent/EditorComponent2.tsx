import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import AddIcon from "@mui/icons-material/Add";
import PanoramaIcon from "@mui/icons-material/Panorama";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { blue } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";

import { collection, addDoc, getFirestore } from "firebase/firestore";
import { RGIntegerFormat } from "three";
import React, { useRef } from "react";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export const EditorComponent2 = () => {
  const [alignment, setAlignment] =
    React.useState<React.CSSProperties["textAlign"]>("left");
  const [formats, setFormats] = React.useState<string[]>([]);
  const [textContentsTitle, setTextContentsTitle] = React.useState("");
  const [textContents, setTextContents] = React.useState("");
  const [contentParts, setContentParts] = React.useState<any[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const applyFormat = (format: string) => {
    if (textAreaRef.current) {
      const textArea = textAreaRef.current;
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;

      if (start !== end) {
        const selectedText = textContents.slice(start, end);
        let formattedText;

        // ここで選択されたテキストに太字やイタリックのフォーマットを適用
        if (format === "bold") {
          formattedText = `<b>${selectedText}</b>`;
        } else if (format === "italic") {
          formattedText = `<i>${selectedText}</i>`;
        }

        setTextContents(
          textContents.slice(0, start) + formattedText + textContents.slice(end)
        );
      }
    }
  };

  // 新しい関数を追加してコンテンツパーツをハンドリング
  const handleAddContentsParts = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setContentParts([...contentParts, { formats: newFormats, text: "" }]);
  };

  // スタイルオブジェクトを作成
  const textAreaStyle: React.CSSProperties = {
    textAlign: alignment,
    fontStyle: formats.includes("italic") ? "italic" : "normal",
    fontWeight: formats.includes("bold") ? "700" : "normal",
    textDecoration: formats.includes("underlined") ? "underline" : "none",
  };

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[]
  ) => {
    setFormats(newFormats); // newFormats を適用するように更新
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment as React.CSSProperties["textAlign"]); // newAlignment を適用するように更新
  };

  // handleAddContents関数でFirestoreへテキストを保存
  const handleAddContents = async () => {
    try {
      const docRef = await addDoc(collection(getFirestore(), "posts"), {
        text: textContents,
        formats,
        alignment,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
      className="p-3 rounded-md bg-white shadow-md space-y-3"
      style={{ height: "75vh", overflow: "auto" }}
    >
      <div className="flex space-x-2">
        <TextField
          fullWidth
          multiline
          placeholder="投稿タイトル"
          rows={1}
          variant="outlined"
          value={textContentsTitle}
          onChange={(e) => setTextContentsTitle(e.target.value)}
          style={textAreaStyle}
        />
        <Button variant="contained" onClick={handleAddContents}>
          Post
        </Button>
      </div>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: "wrap",
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          exclusive
          onChange={handleAddContentsParts}
          aria-label="add Contents"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <AddIcon sx={{ color: blue[300] }} />
          </ToggleButton>
          <ToggleButton value="left" aria-label="left aligned">
            <PanoramaIcon sx={{ color: blue[300] }} />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton
            value="bold"
            aria-label="bold"
            onClick={() => applyFormat("bold")}
          >
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton
            value="italic"
            aria-label="italic"
            onClick={() => applyFormat("italic")}
          >
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
      <div>
        <TextField
          fullWidth
          multiline
          rows={20}
          variant="outlined"
          value={textContents}
          onChange={(e) => setTextContents(e.target.value)}
          style={textAreaStyle}
          placeholder="本文を入力してください。"
          inputRef={textAreaRef}
        />
      </div>
    </div>
  );
};
