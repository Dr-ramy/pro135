// components/modals/VideoModalButton.tsx
"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

interface VideoModalButtonProps {
  iframeUrl: string;
  trigger: React.ReactNode;   // ✅ now accepts a custom button/trigger
  title?: string;
}

const VideoModalButton: React.FC<VideoModalButtonProps> = ({ iframeUrl, trigger, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="max-w-3xl w-[90vw]">
        <DialogTitle className="sr-only">{title || "شاهد"}</DialogTitle>

        <iframe
          width="100%"
          height="400px"
          src={iframeUrl}
          title={title || "Embedded Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </DialogContent>
    </Dialog>
  );
};

export default VideoModalButton;
