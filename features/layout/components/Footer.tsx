"use client";

import {
  Box,
  Container,
  IconButton,
  Typography,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import BookIcon from "@mui/icons-material/Book";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

type Contact = {
  id: string;
  title: string;
  iconUrl: string;
  url: string;
};

const contacts: Contact[] = [
  {
    id: "0",
    title: "Email",
    iconUrl: "/email.svg",
    url: "mailto:shoaibhajhussen@gmail.com",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: "/linkedin.svg",
    url: "https://www.linkedin.com/in/shoaib-haj-hussen",
  },
  {
    id: "2",
    title: "GitHub",
    iconUrl: "/github.svg",
    url: "https://github.com/shoaibhajj",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: "/telegram.svg",
    url: "https://t.me/Shoaib_hajj",
  },
  {
    id: "4",
    title: "WhatsApp",
    iconUrl: "/whatsapp.svg",
    url: "https://wa.me/963991420513",
  },
];

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 4 },
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          {!isMobile && (
            <Typography variant="body2" color="grey.400" whiteSpace="nowrap">
              © 2026 Shoaib Hajj. All rights reserved.
            </Typography>
          )}

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
          >
            {contacts.map((item) => (
              <IconButton
                key={item.id}
                href={item.url}
                target="_blank"
                sx={{
                  width: 56,
                  height: 56,
                  backgroundColor: "#1f2a37",
                  borderRadius: "50%",
                  "&:hover": {
                    backgroundColor: "#374151",
                    border: "solid 1px #256bc7",
                  },
                }}
              >
                <Image
                  src={item.iconUrl}
                  alt={item.title}
                  width={22}
                  height={22}
                />
              </IconButton>
            ))}

            <IconButton
              href="/resume.pdf"
              download="Shoaib_Hajj.pdf"
              sx={{
                width: 56,
                height: 56,
                backgroundColor: "#1f2a37",
                borderRadius: "50%",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#374151",
                  border: "solid 1px #256bc7",
                },
              }}
            >
              <BookIcon />
            </IconButton>

            <IconButton
              href="https://shoaib-haj-portfolio.vercel.app/"
              target="_blank"
              sx={{
                width: 56,
                height: 56,
                backgroundColor: "#1f2a37",
                borderRadius: "50%",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#374151",
                  border: "solid 1px #256bc7",
                },
              }}
            >
              <WorkOutlineIcon />
            </IconButton>
          </Stack>

          {/* Mobile Copyright */}
          {isMobile && (
            <Typography variant="body2" color="grey.400" textAlign="center">
              © 2026 Shoaib Hajj. All rights reserved.
            </Typography>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
