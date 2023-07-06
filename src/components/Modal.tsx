import { Box, Typography, Modal, TextField, ModalProps } from "@mui/material";
import { SxProps } from "@mui/system";
import { useState, ReactNode } from "react";

// Modal Props type
type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children?: ReactNode;
};

export const CustomModal = ({
  open,
  onClose,
  title,
  description,
  children,
}: CustomModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
        {children}
      </Box>
    </Modal>
  );
};

const modalStyles = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px",
  borderColor: "primary.main",
  boxShadow: 24,
  p: 4,
};
