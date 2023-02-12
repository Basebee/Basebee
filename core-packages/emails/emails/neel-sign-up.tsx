import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';
import colors from 'tailwindcss/colors';

export default function Email() {
	return (
		<Html>
			<Head />
			<Container style={container}>
				<Img
					src="https://myneel.com/images/emails/neel-header.png"
					width="360"
					height="128"
					alt="Neel"
					style={logo}
				/>
				<Text style={tertiary}>Log in to neel</Text>
				<Text style={secondary}>Enter the following code to log in to Neel</Text>
				<Section style={codeContainer}>
					<Text style={code}>144833</Text>
				</Section>
				<Text style={paragraph}>Not expecting this email?</Text>
				<Text style={paragraph}>
					Contact{' '}
					<Link href="mailto:support@myneel.com" style={link}>
						support@myneel.com
					</Link>{' '}
					if you did not request this code.
				</Text>
			</Container>
		</Html>
	);
}

const container = {
	backgroundColor: '#ffffff',
	border: '1px solid ' + colors.gray[200],
	borderRadius: '6px',
	boxShadow: '0 5px 10px rgba(20,50,70,.2)',
	marginTop: '20px',
	width: '360px',
	margin: '0 auto',
	padding: '0 0 130px',
};

const logo = {
	margin: '0 auto',
	borderRadius: '6px',
};

const tertiary = {
	color: colors.indigo[500],
	fontSize: '11px',
	fontWeight: 700,
	fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
	height: '16px',
	letterSpacing: '0',
	lineHeight: '16px',
	margin: '16px 8px 8px 8px',
	textTransform: 'uppercase' as const,
	textAlign: 'center' as const,
};

const secondary = {
	color: '#000',
	display: 'inline-block',
	fontFamily: 'HelveticaNeue-Medium,Helvetica,Arial,sans-serif',
	fontSize: '20px',
	fontWeight: 500,
	lineHeight: '24px',
	marginBottom: '0',
	marginTop: '0',
	textAlign: 'center' as const,
};

const codeContainer = {
	background: colors.gray[100],
	borderRadius: '4px',
	margin: '16px auto 14px',
	verticalAlign: 'middle',
	width: '280px',
};

const code = {
	color: '#000',
	display: 'inline-block',
	fontFamily: 'HelveticaNeue-Bold',
	fontSize: '32px',
	fontWeight: 700,
	letterSpacing: '6px',
	lineHeight: '40px',
	paddingBottom: '8px',
	paddingTop: '8px',
	margin: '0 auto',
	width: '100%',
	textAlign: 'center' as const,
};

const paragraph = {
	color: '#444',
	fontSize: '15px',
	fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
	letterSpacing: '0',
	lineHeight: '23px',
	padding: '0 40px',
	margin: '0',
	textAlign: 'center' as const,
};

const link = {
	color: '#444',
	textDecoration: 'underline',
};
