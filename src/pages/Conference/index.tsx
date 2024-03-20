import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { closeConference } from "services/room";
import { useAuthStore } from "store/auth";
import WiseAPI from "wise-api";

export const Conference: React.FC = () => {
  const { short } = useParams<{ short: string }>();
  const { user } = useAuthStore();

  const isProvider = user?.userType === "PROVIDER";

  useEffect(() => {
    if (user === undefined) return;

    const startConference = async () => {
      const wise = await WiseAPI({
        baseUrl: "https://session-manager.dev.v4h.cloud/api/v1",
        domain: "conf.dev.v4h.cloud",
      });

      await wise.session.startConference(short ?? "", {
        parentNode: document.getElementById("conference"),
        moderator: isProvider,
        startWithAudioMuted: true,
        startWithVideoMuted: true,

        onClose: () => {
          window.location.href = "/home";
          if (isProvider) {
            closeConference(short ?? "");
          }
        },
        buttons: [
          "microphone",
          "camera",
          "desktop",
          "fullscreen",
          "hangup",
          "profile",
          "chat",
          "settings",
          "raisehand",
          "videoquality",
          "filmstrip",
          "stats",
          "tileview",
          "help",
          "libras",
        ],
        userInfo: {
          displayName: user?.firstName + " " + user?.lastName,
          email: user?.email,
          avatarUrl: user?.avatarUrl || "",
        },
      });
    };

    startConference();
  }, [user, short]);

  if (!short) return <Navigate to="/home" />;

  return (
    <div
      className="h-dvh w-screen"
      id="conference"
    />
  );
};