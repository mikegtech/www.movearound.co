import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'How and Why We Use Your Information (Legal Basis for Processing)',
    description:
      "We use the information we collect for specific, stated purposes, and we only process your data when we have a valid legal basis to do so. The principle of 'purpose limitation' is central to our data handling practices, ensuring that your data is used in ways that are necessary and transparent. Our legal bases for processing include performing our contractual duties to you, our legitimate business interests, compliance with legal obligations, and your consent.",
  },
  {
    description:
      '• To Provide, Maintain, and Personalize Our Services (Performance of a Contract): We use your information to operate our platform. This includes creating and managing your account, displaying MLS listings, and personalizing your experience by providing tailored property recommendations and saved search results based on your activity and preferences.',
  },
  {
    description:
      '• To Communicate with You (Legitimate Interest / Performance of a Contract): We use your contact information to send you administrative messages, such as updates to our terms, security alerts, and other essential service-related information. We also use it to respond to your customer support requests and other inquiries. With your consent where required, we may also send you marketing and promotional communications, which you can opt out of at any time.',
  },
  {
    description:
      '• For Security, Safety, and Fraud Prevention (Legitimate Interest / Legal Obligation): Protecting our users and our platform is a top priority. We use account information, usage data, and other signals to monitor for and prevent fraudulent or illegal activity, verify user identities, and protect the security of your account.',
  },
  {
    description:
      "• For Analytics and Service Improvement (Legitimate Interest): We analyze usage trends and user behavior to understand how our Services are used. This allows us to troubleshoot issues, improve our platform's functionality, and develop new features and services that better meet the needs of our users.",
  },
  {
    description:
      '• To Comply with Legal and Regulatory Obligations (Legal Obligation): We may process your information to comply with applicable laws, lawful requests, and legal processes, such as responding to subpoenas or requests from government authorities. This also includes enforcing our Terms of Service and complying with MLS display rules and reporting obligations.',
  },
  {
    title: 'Sharing and Disclosure of Information',
    description:
      'We do not sell your personal information in the traditional sense. However, we may share or disclose your information with certain third parties under specific circumstances, as detailed below. We are committed to transparency regarding these practices.',
  },
  {
    description:
      '• With MLS Providers and Participants: To facilitate real estate transactions, information related to your interactions with a listing may be shared with the relevant MLS and its members.',
  },
  {
    description:
      "• With Service Providers and Vendors: We engage third-party companies and individuals to perform services on our behalf ('Service Providers'). These include providers of cloud hosting, data analytics, customer support software, and payment processing services. These Service Providers are contractually obligated to maintain the confidentiality of the information.",
  },
  {
    description:
      '• With Real Estate Professionals: When you explicitly request to be connected with a real estate professional through our platform, we will share necessary contact details.',
  },
  {
    description:
      '• For Legal Reasons and to Protect Our Rights: We may disclose your information to comply with legal obligations, protect rights and safety, and address fraud or security issues.',
  },
  {
    description:
      '• In Connection with a Business Transaction: Information may be transferred as part of mergers or acquisitions. We will notify you of any such changes.',
  },
  {
    description:
      '• With Your Consent: We may share your information for other purposes with your explicit consent.',
  },
  {
    title: 'Your Data Protection Rights and Choices',
    description:
      'You have certain rights regarding the personal information we hold about you, including the rights to access, delete, correct, opt-out of sale or sharing, and non-discrimination. To exercise these rights, please submit a request via email (privacy@movearound.co), phone, or our web form. We will verify your identity before processing your request.',
  },
  {
    title: 'Cookies, Tracking Technologies, and Analytics',
    description:
      "Our Services use cookies and similar technologies for functionality, performance, analytics, and advertising. You can manage cookies through browser settings or our cookie consent tool. We use Google Analytics; opt-out via their browser add-on. We do not currently respond to 'Do Not Track' signals due to lack of standards.",
  },
  {
    title: 'Data Security and Retention',
    description:
      'We maintain security measures like encryption and access controls to protect your data. We retain personal information as necessary for service provision, legal compliance, or legitimate business purposes. Data is securely deleted or anonymized when no longer needed.',
  },
  {
    title: 'Specific Legal Disclosures',
    description:
      'Our Services are not for children under 16. Data may be transferred internationally. We are not responsible for third-party sites linked from our services.',
  },
  {
    title: 'Contact Information for Privacy Inquiries',
    description:
      'Contact us with privacy concerns via email (privacy@movearound.co), mail, or phone. You may lodge a complaint with a supervisory authority if unsatisfied.',
  },
];

const PrivacySection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box>
      <Typography
        variant={'h6'}
        gutterBottom
        sx={{
          fontWeight: 'medium',
        }}
      >
        {title}
      </Typography>
      <Typography component={'p'} color={'text.secondary'}>
        {description}
      </Typography>
    </Box>
  );
};

const Content = (): JSX.Element => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
