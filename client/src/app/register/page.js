'use client'
import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { Button, Card, Input, Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phoneNumber: '',
      fullName: '',
      gender: '',
    },
    onSubmit: values => {
     registerUser(values)
    },
  });

  const registerUser =async (values)=>{
    const {data}= await  axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, values)
    if(data) alert("registered successfully")
    }
  return (
    <Card className=' flex m-12 p-12 items-center justify-center'>
 <form  onSubmit={formik.handleSubmit}>
   <label htmlFor="fullName">Full Name</label>
      <Input
        id="fullName"
        name="fullName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
         <label htmlFor="userName">User Name</label>
      <Input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.userName}
      />
         <label htmlFor="gender">Gender</label>
         <RadioGroup>
      <Radio value="Male">Male</Radio>
      <Radio value="Female">Female</Radio>
      <Radio value="Other">Other</Radio>
    </RadioGroup>
      {/* <Input
        id="gender"
        name="gender"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.gender}
      /> */}
{/*       
      <Select name="gender" onChange={(e)=>formik.setFieldValue('gender', e.target.value)}>
        <SelectItem key = "Male"> Male </SelectItem>
        <SelectItem key = "Female"> Female </SelectItem>
        <SelectItem key = "Other"> Other </SelectItem>
      </Select> */}
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       <label htmlFor="password">Password</label>
      <Input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        />
      <Button type="submit">Submit</Button>
    </form>
    </Card>
   
  );
};

export default SignupForm
