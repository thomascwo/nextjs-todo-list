import { TextArea, TextAreaProps } from "@heroui/react";
import clsx from "clsx";
import { isMobile } from "react-device-detect";

interface Props extends TextAreaProps {
  onEnterSubmit?: () => void;
}

export default function MyTextArea(props: Props) {
  const { onEnterSubmit, className, ...rest } = props;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (
      !isMobile &&
      e.key === "Enter" &&
      !e.shiftKey &&
      !e.nativeEvent.isComposing
    ) {
      e.preventDefault();
      onEnterSubmit?.();
    }
  };

  return (
    <TextArea
      className={clsx(
        "rounded-xl h-auto min-h-12 flex-1 py-4 text-base",
        "field-sizing-content resize-none",
        "focus:ring-red-600 ring-0 focus:ring-1",
        className,
      )}
      rows={1}
      onKeyDown={handleKeyDown}
      enterKeyHint="enter"
      {...rest}
    />
  );
}
