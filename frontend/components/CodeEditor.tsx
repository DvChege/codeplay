"use client";
import Editor from "@monaco-editor/react";

type Props = {
  language: string;
  value: string;
  onChange: (value: string | undefined) => void;
};

export default function CodeEditor({ language, value, onChange }: Props) {
  return (
    <Editor
      height="400px"
      language={language}
      value={value}
      onChange={onChange}
      theme="vs-dark"
      options={{ fontSize: 16, minimap: { enabled: false } }}
    />
  );
}