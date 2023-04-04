import { Modal } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./styles.module.scss";

export default function Loader() {
  return (
    <Modal open={true} className={styles.modal} disableAutoFocus={true}>
      <div className={styles.loader}>
        <CircularProgress
          className={styles.loader_circularProgress}
          sx={{
            "&.MuiCircularProgress-root": {
              color: "#000",
            },
            "& .MuiCircularProgress-svg": {
              outline: "none",
              border: "none",
            },
            "&:focus-visible": {
              outline: "none",
              border: "none",
            },
          }}
        />
      </div>
    </Modal>
  );
}
