
import Dashlay from '../../Comp/Dashlay'
import "./tranc.css"
import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Tablet from './Tablet';
import { BsSearch } from "react-icons/bs";
const Tran = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <Dashlay title="Transactions">
      <div className="rr">
        <Flex justify="end" mt="6" mb="3">
          <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
        </Flex>
        <Card borderRadius="1rem">
          <Tabs>
            <TabList
              pt="4"
              display="flex"
              w="full"
              justifyContent="space-between"
            >
              <HStack
              >
                {tabs.map((tab) => (
                  <Tab key={tab.name} display="flex" gap="2" pb="4">
                    {tab.name}{" "}
                    <Tag colorScheme="gray" borderRadius="full">
                      {tab.count}
                    </Tag>
                  </Tab>
                ))}
              </HStack>

              <InputGroup maxW="200px" pr="6">
                <InputLeftElement pointerEvents="none">
                  <Icon as={BsSearch} />
                </InputLeftElement>
                <Input type="tel" placeholder="Search..." />
              </InputGroup>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Tablet />
              </TabPanel>
              <TabPanel>
                <Tablet />
              </TabPanel>
              <TabPanel>
                <Tablet />
              </TabPanel>
              <TabPanel>
                <Tablet />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </div>
      <div className="card">
        {tableData.map((data) => (
          <div className={`card ${data.status === 'cancelled' ? 'cancelled' : ''}  ${data.status === 'pending' ? 'pending' : ''}`}>
            <div className="card-header">
              <div className="card-type">
                {data.type.name} - {data.type.tag}
              </div>
              <div className="card-amount">
                {data.amount}
              </div>
            </div>
            <div className="card-date">
              Date: {data.date}
            </div>
            <div className="card-time">
              Time: {data.time}
            </div>
            <div className={`card-status ${data.status}`}>
              Status: {data.status}
            </div>
          </div>
        ))}
      </div>
    </Dashlay>
  );
};

export default Tran;