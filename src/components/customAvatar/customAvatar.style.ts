import { makeStyles, Theme } from "@material-ui/core";

interface StyleProps {
    avatarImage?: string;
    size?: number;
    randomAvatarBg?: string;
    fontSize?: number;
}

export default makeStyles((theme: Theme) => ({
  avatarWrapper: {
    padding: 5,
    borderRadius: "100%",
    backgroundColor: "white",
    boxShadow: "4px 3px 10px #999999",
    display: "inline-block",
  },
  avatarImage: {
    backgroundImage: (props: StyleProps) => `url(${props.avatarImage ? props.avatarImage : ""})`,
    width: (props: StyleProps) => props.size ? props.size : 40,
    height: (props: StyleProps) => props.size ? props.size : 40,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "100%",
    backgroundColor: (props: StyleProps) => props.avatarImage ? "" : props.randomAvatarBg,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: (props: StyleProps) => props.fontSize ? props.fontSize : 12,
    fontWeight: "bold",
    color: "white",
  }
}));
