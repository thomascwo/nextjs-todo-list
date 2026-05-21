import DeleteButton from "@/src/components/delete-button";
import MyTextArea from "@/src/components/my-textarea";
import { Check, PencilToSquare } from "@gravity-ui/icons";
import { Button, Card } from "@heroui/react";
import clsx from "clsx";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

interface Props extends React.ComponentProps<"div"> {
  task: Task;
  onCheck?: (task: Task) => void;
  onDelete?: (task: Task) => void;
  onUpdate?: (task: Task) => void;
}

export default function TaskCard(props: Props) {
  const { task, onCheck, onDelete, onUpdate, className } = props;

  const { t } = useTranslation();

  const [editText, setEditText] = useState<string>(task.text);
  const [editing, setEditing] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const focusTextArea = () => {
    setTimeout(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.focus();
        const len = textarea.value.length;
        textarea.setSelectionRange(len, len);
      }
    });
  };

  const onClickEdit = () => {
    setEditing(true);
    focusTextArea();
  };

  const onClickUpdate = () => {
    const updatedText = editText.trim();
    if (updatedText.length === 0) return;

    setEditing(false);

    if (updatedText === task.text) return;

    setEditText(updatedText);
    task.text = updatedText;
    onUpdate?.(task);
  };

  return (
    <Card
      className={clsx(
        "flex w-full flex-row items-center rounded-xl p-3",
        className,
      )}
      variant={task.completed ? "secondary" : "default"}
    >
      <Card.Header>
        <Button
          isIconOnly
          variant="outline"
          size="sm"
          onClick={() => onCheck?.(task)}
          className={clsx(editing && "hidden")}
        >
          {task.completed && <Check fontSize={2} color="#555" />}
        </Button>
      </Card.Header>

      <Card.Content className="whitespace-pre-wrap">
        {editing ? (
          <MyTextArea
            ref={textareaRef}
            value={editText}
            onChange={(e) => setEditText(e.currentTarget.value)}
            placeholder={t("input-empty-placeholder")}
            onEnterSubmit={onClickUpdate}
          />
        ) : (
          <motion.div layout="position">{task.text}</motion.div>
        )}
      </Card.Content>

      <Card.Footer className="gap-1">
        <Button
          isIconOnly
          variant="outline"
          size={isMobile ? "sm" : "md"}
          onClick={editing ? onClickUpdate : onClickEdit}
          isDisabled={editing && editText.trim().length === 0}
        >
          {editing ? <Check /> : <PencilToSquare />}
        </Button>

        {!editing && (
          <DeleteButton
            heading={t("delete-task-permanently")}
            body={
              <>
                <p>{t("this-will-permanently-delete-the-task")}</p>
                <strong>{task.text}</strong>
              </>
            }
            onDelete={() => onDelete?.(task)}
          />
        )}
      </Card.Footer>
    </Card>
  );
}
