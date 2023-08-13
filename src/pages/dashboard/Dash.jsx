import React from 'react'
import Dashlay from '../../Comp/Dashlay'
import Front from './Component/Front'
import { Price } from './Component/Price'
import Trans from './Component/Trans'
import Infocard from './Component/Infocard'
import { Grid, GridItem } from "@chakra-ui/react";
const Dash = () => {
  return (
    <>
       <Dashlay title="DashBoard" >
       <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <Front />
        </GridItem>
        <GridItem colSpan={1}>
          <Price />
        </GridItem>
        <GridItem colSpan={1}>
          <Trans />
        </GridItem>
        <GridItem colSpan={1}>
          <Infocard
            imgUrl="/dot_bg.svg"
            text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Infocard
            inverted={true}
            tagText="Contact"
            imgUrl="/grid_bg.svg"
            text="Learn more about our real estate, mortgage, and  corporate account services"
          />
        </GridItem>
      </Grid>
       </Dashlay>
    </>
  )
}

export default Dash