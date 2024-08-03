import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function User() {
  return (
    <>
      <Avatar>
        <a href="https://github.com/luannpl">
        <AvatarImage src="https://github.com/luannpl.png" /></a>
        <AvatarFallback>PL</AvatarFallback>
      </Avatar>
    </>
  );
}
