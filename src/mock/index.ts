import { IncomingFormData } from '@/types';

export const mockBackEndData: IncomingFormData = {
  steps: [
    {
      title: 'Who is the primary contact for this policy?',
      description:
        'This person will receive all communications from Newfront about this policy. You can change this contact information later. If you’re not sure, just add your contact information.',
      fields: [
        {
          type: 'Input',
          name: 'fullName',
          inputType: 'text',
          label: 'Full Name',
          required: true,
        },
        {
          type: 'Input',
          name: 'role',
          inputType: 'text',
          label: 'Role',
          required: true,
        },
        {
          type: 'Input',
          name: 'phoneNumber',
          inputType: 'tel',
          label: 'PhoneNumber',
          required: true,
        },
      ],
    },
    {
      title: 'Tell us about your company',
      fields: [
        {
          type: 'Input',
          name: 'companyName',
          inputType: 'text',
          label: 'Company Name',
          required: true,
        },
        {
          type: 'Input',
          name: 'fein',
          inputType: 'number',
          label: 'What is your Federal Employer Identification Number? (FEIN)',
          required: true,
        },
        {
          type: 'Input',
          name: 'yearsInBusiness',
          inputType: 'number',
          label: 'Years in business',
          required: true,
        },
        {
          type: 'Input',
          name: 'numberOfLocations',
          inputType: 'number',
          label: 'Number of locations',
          required: true,
        },
        {
          type: 'Input',
          name: 'activeStates',
          inputType: 'text',
          label: 'In which states do you operate?',
          required: true,
        },
      ],
    },
    {
      title: 'Tell us about your employees',
      fields: [
        {
          type: 'Input',
          name: 'healthProfessional',
          inputType: 'text',
          label: 'What’s the name of the clinic, physician, or ER used for work injuries?',
          required: true,
        },
        {
          type: 'Checkbox',
          name: 'groupMedicalInsurance',
          label: 'Do you provide group medical insurance?',
        },
        {
          type: 'Checkbox',
          name: 'pensionPlan',
          label: 'Do you offer a retirement or pension plan?',
        },
        {
          type: 'Checkbox',
          name: 'paidVacation',
          label: 'Do you give paid vacation?',
        },
        {
          type: 'Input',
          name: 'paidVacationDetails',
          inputType: 'textarea',
          dependsOn: 'paidVacation',
          label: 'Please provide details about the paid vacation',
          required: true,
        },
      ],
    },
    {
      title: 'Tell us about your employees',
      fields: [
        {
          type: 'RadioCards',
          name: 'paymentOption',
          options: [
            {
              label: 'I want to pay Newfront',
              description:
                'You’ll pay Newfront instead of paying each insurance company separately. There are no fees.',
              recommended: true,
            },
            {
              label: 'I want to pay the insurance company directly',
              description: `You’ll receive bills from the insurance company and it will be your responsibility 
              to make sure they are paid to keep your coverage.`,
            },
          ],
        },
      ],
    },
  ],
};
