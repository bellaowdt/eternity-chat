import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import ChatExperience from "./components/ChatExperience";
import ChooseUs from "./components/ChooseUs";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Container maxWidth={"md"}>
        <ChatExperience />
        <ChooseUs />
      </Container>
    </>
  );
}
