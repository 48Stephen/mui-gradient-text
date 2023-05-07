import { Typography } from "@mui/material"


const TextGradient = ({options, children}) => {
    return (
        <Typography
            variant={options.variant}
            sx={{
                backgroundImage: `linear-gradient( to ${options.direction}, ${options.firstColor}, ${options.secondColor})`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}
        >
            {children}
        </Typography>
    )

}
export default TextGradient