import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";

export default function DeleteButton(props: {
  heading?: string;
  body?: React.ReactNode;
  onDelete: () => void;
}) {
  const { heading, body, onDelete } = props;

  const { t } = useTranslation();

  return (
    <AlertDialog>
      <Button isIconOnly variant="danger-soft" size={isMobile ? "sm" : "md"}>
        <TrashBin />
      </Button>
      <AlertDialog.Backdrop
        isDismissable={true}
        isKeyboardDismissDisabled={false}
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="rounded-xl sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                {heading ?? t("confirm-delete")}
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>{body}</AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary" className="rounded-xl">
                {t("cancel")}
              </Button>
              <Button
                slot="close"
                variant="danger"
                className="bg-red-600 rounded-xl"
                onClick={onDelete}
              >
                {t("delete")}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
