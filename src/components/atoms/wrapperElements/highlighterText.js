import Typography from "@mui/material/Typography";

export default function HighlighterText({children, variant }){
  return (
    <>
      <Typography variant={variant} component="span" className="highlight" color="text.secondary" gutterBottom sx={{  }}>
        {children}
      </Typography>
    </>
  )
}
