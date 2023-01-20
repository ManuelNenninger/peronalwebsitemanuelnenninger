import SectionWrapper from "../atoms/wrapperElements/sectionWrapper";
import AnimatedText from "../atoms/wrapperElements/animatedtext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { motion, AnimatePresence } from "framer-motion";

export default function Intro({ loading, setLoading }) {
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="child"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: [0.17, 0.55, 0.55, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -100,
              transition: {
                ease: "easeInOut",
                duration: 1,
              },
            }}
            onAnimationComplete={() => setLoading(false)}
          >
            <SectionWrapper fullViewHeight topDistance>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: "100%" }}
              >
                <Grid item>
                  <Typography
                    variant="h1"
                    align="center"
                    sx={{ display: { xs: "none", md: "block" } }}
                  >
                    <AnimatedText setLoading={setLoading}>
                      {["Manuel Nenninger"]}
                    </AnimatedText>
                  </Typography>
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    <AnimatedText setLoading={setLoading}>
                      {["Manuel Nenninger"]}
                    </AnimatedText>
                  </Typography>
                </Grid>
              </Grid>
            </SectionWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
