import { Box } from "@chakra-ui/react";

export default function Gmap() {
    return (
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3887.4909916390466!2d77.50407247484196!3d13.004374987314005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1729866955981!5m2!1sen!2sin"
          width="100%"
          height="450"
        //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    );
}