import Box from "@mui/material/Box";
import Image from "next/image";
import HeroPicture from "../../../../public/bild.png";
import {urlFor} from "../../../../lib/sanity";

export default function heroPicture({content={}}) {
  let { mainImage } = content;

  let url;
  if(mainImage){
    url = (urlFor(mainImage).url());
  }

  return (
    <>
    <Box className="unset-img" sx={{ px: {xs: 1, md: 15}, }}>
        {/*<BlobWrapper>*/}
        {/*<Box sx={{borderColor: "red", borderRadius: "25%", border:2, p: 5}}>*/}
          <Image
          alt="Picture of the author"
          width={500}
          height={500}
          src={mainImage ? url : HeroPicture}
          className="custom-img"/>
        {/*</Box>*/}
        {/*</BlobWrapper>*/}
      </Box>
    </>
  );
}
