import React from 'react'
import Dashlay from '../../Comp/Dashlay'
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import { Stack } from "@chakra-ui/react";
import SupportCard from './files/SupportCard';
import ContactCard from './files/ContactCard';
import Infocard from '../dashboard/Component/Infocard';
import "./support.css"
const Support = () => {
  return (
    <Dashlay>
      <div className="contact">

      <Stack spacing="5rem">
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
        />
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <Infocard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
            />
          }
          title="Live Chat"
          text=" Don’t have time to wait for the answer? Chat with us now."
        />
      </Stack>
      </div>
    </Dashlay>
  );
};

export default Support;