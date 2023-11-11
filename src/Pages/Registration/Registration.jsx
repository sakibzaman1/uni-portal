import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

const Registration = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <Card className="w-96 my-20">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography
              className="flex items-center justify-between gap-4"
              variant="h3"
              color="white"
            >
              <h1>Registration</h1>
              <img
                className="w-10 h-10"
                src="https://i.ibb.co/jkWzRyY/ugv-logo.png"
                alt=""
              />
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Name" size="lg" />
            <Input className="border-none" type="file" label="Image" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Accept Terms & Conditions" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Register
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Login
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="w-1/2">
        <h1 className="text-4xl mb-10">
        Join Global Village
        </h1>
        <p className="text-base">
          Where the world comes together to learn and thrive. Sign up and become
          a part of our diverse community dedicated to knowledge, growth, and
          global connections
        </p>
      </div>
    </div>
  );
};

export default Registration;
