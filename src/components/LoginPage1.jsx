// import React from 'react'
// import styled from 'styled-components'
// import { Button, Checkbox, Card, Space } from 'antd';

// // const Button = styled.button`

// // `;
// // const onChange = (e) => {
// //     console.log(`checked = ${e.target.checked}`);
// // }; 

// // const imageUrl = '/public/Images/APIsec.jpg';

// const BackgroundContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 50vh;
//     background-size: cover;
//     background-image: url("/src/images/APIsec.jpg");
// `;

// const LoginFormContainer = styled.div`
//     width: 300px;
//     padding: 20px;
//     border-radius: 10px;
//     background-color: rgba(255, 255, 255, 0.8); /* Add an overlay to make the text more readable */
// `;

// const InputContainer = styled.div`
//     margin-bottom: 20px;
// `;

// const Label = styled.label`
//     display: block;
//     margin-bottom: 5px;
//     font-weight: bold;
// `;

// const InputField = styled.input`
//     width: 100%;
//     padding: 8px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
// `;

// function Login() {
//     return (
//     <>
//     {/* <div> */}
//     {/* <img src="/src/images/APIsec.jpg" alt="gcp" style={{ height: 40 }} /> */}
//         <Space direction="vertical" size={16}>
//             <Card
//                 title="APIsec User Login"
//                 extra={<a href="#">More</a>}
//                 style={{
//                 width: 500,
//                 height: 500,
//                 // backgroundImage: url('/public/Images/APIsec.jpg'),
//             }}
//         >
//         <LoginFormContainer>
//         <BackgroundContainer>
//             <form>
//                 <Login />
//                     <InputContainer>
//                         <Label>Username: </Label>
//                         <InputField type="text" id="username" name="username" placeholder="Enter your username" maxLength={30} pattern="[A-Za-z0-9]+" required></InputField>
//                     </InputContainer>
//                     <InputContainer>
//                         <Label>Password: </Label>
//                         <InputField type="password" id="password" name="password" placeholder="Enter your password" maxLength={20} pattern="[A-Za-z0-9]+" required></InputField>
//                     </InputContainer>
//                     <Checkbox onChange={onChange}>By clicking "I accept all the disclaimers.</Checkbox>
//                     <br />
//                     <br />
//                     <Button type="primary" type1="submit">Login</Button>    <Button type="link">Forgot Password ?</Button>
//                     <br />
//                     <br />
//                     <Button>Sign Up</Button>
//             </form>
//             </BackgroundContainer>
//         </LoginFormContainer>
//             </Card>
//         </Space>
//     </>
//     )
// }

// export default Login