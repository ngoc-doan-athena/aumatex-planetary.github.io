import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// import recaptcha, Formik & Yup for form validation
import { useFormik } from "formik";
import * as Yup from "yup";

import { Container as ContainerBase } from "../../components/Layouts";
import Sidebar from "../../components/SideBar/index.js";
import HeaderDetail from "../../components/Header/HeaderDetail.js";
import Icon from "../../components/Icon/index.js";
import {
	InputBase as Input,
	InputPassword,
} from "../../components/Input/index.js"; // eslint-disable-next-line
import Setting from "./ExchangeSetting.js";

const Container = tw(
	ContainerBase
)`h-screen lg:min-h-screen font-medium flex justify-center m-0 font-inter`;
const Content = tw.div`bg-gray-100 dark:bg-black text-black dark:text-white w-full lg:w-auto flex flex-col lg:flex-row justify-center flex-1 relative`;
const MainContent = tw.div`flex-1 p-4 pt-0 lg:px-12 lg:pb-8 order-first lg:order-last`;


const LabelSuccess = tw.span`inline-block py-2 px-2 w-28 rounded-full bg-state-success/10 text-state-success border border-solid border-state-success text-center`;
const LabelDanger = tw.span`inline-block py-2 px-2 w-28 rounded-full bg-state-danger/10 text-state-danger border border-solid border-state-danger text-center`;


export default ({
	headingText = "Exchange Setup",

}) => {
	return (
		<Container>
			<Content>
				<Sidebar />
				<MainContent>
					<HeaderDetail
						pageType="detail"
						pageParent="myexchanges"
						headingText={headingText}
						headingAccountText="My Account"
						headingUserAvatar="https://ui-avatars.com/api/?name=xavier+trevor&background=fdb04b&rounded=true&bold=true"
						headingHasNotif="true"
						headingHasSearch="false"
					/>
					<Setting />
				</MainContent>
			</Content>
		</Container>
	);
};