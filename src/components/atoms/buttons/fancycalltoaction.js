import Box from "@mui/material/Box";

export default function FanceCallToAction({text="Test Text", href="https://google.de"}){
  return(

    <>
      <Box>
        <button class="learn-more" href={href}>
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">{text}</span>
        </button>
      </Box>
    </>
  )
}
