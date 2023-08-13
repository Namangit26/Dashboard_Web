import {
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    Icon,
    Stack,
    Text,
  } from "@chakra-ui/react";
import Card from "../../../card";
  import { BsCurrencyRupee } from "react-icons/bs";
  import { FaBtc } from "react-icons/fa";
  import { Fragment } from "react";
  
  const Trans = () => {
    const trans = [
      {
        id: "1",
        icon: BsCurrencyRupee,
        text: "HDFC Deposit",
        amount: "+ ₹81,123.10",
        timestamp: "2022-06-09 7:06 PM",
      },
      {
        id: "2",
        icon: FaBtc,
        text: "BTC  Sell",
        amount: "- 122.4891 BTC",
        timestamp: "2023-08-09 6:06 PM",
      },
      {
        id: "3",
        icon: BsCurrencyRupee,
        text: "INR Deposit",
        amount: "+ ₹81,123.10",
        timestamp: "2023-08-09 3:06 PM",
      },
    ];
  
    return (
      <Card h="full">
        <Text mb="6" fontSize="sm" color="black.80">
          Recent Trans
        </Text>
        <Stack spacing={4}>
          {trans.map((transaction, i) => (
            <Fragment key={transaction.id}>
              {i !== 0 && <Divider />}
              <Flex gap="4">
                <Grid
                  placeItems="center"
                  bg="black.5"
                  boxSize={10}
                  borderRadius="full"
                >
                  <Icon as={transaction.icon} />
                </Grid>
                <Flex justify="space-between" w="full">
                  <Stack spacing={0}>
                    <Text textStyle="h6">{transaction.text}</Text>
                    <Text fontSize="sm" color="black.40">
                      {transaction.timestamp}
                    </Text>
                  </Stack>
                  <Text textStyle="h6">{transaction.amount}</Text>
                </Flex>
              </Flex>
            </Fragment>
          ))}
        </Stack>
        <Button w="full" mt="6" colorScheme="gray">
          View All
        </Button>
      </Card>
    );
  };
  
  export default Trans;