import React, { useState } from 'react';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Box,
    Grid,
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../../../FormField/InputField';          // Your custom InputField component
import SelectField from '../../../FormField/SelectField';         // Your custom SelectField compo
import RadioGroupField from '../../../FormField/RadioGroupField';
import DateField from '../../../FormField/DateField';

// Steps Names
const steps = ['Personal Details', 'Address Details', 'Office Details'];

// Sample Master Data (Replace with your actual data or API calls)
const businessUnits = [
    { id: '1', name: 'Business Unit 1' },
    { id: '2', name: 'Business Unit 2' },
];

const departments = [
    { id: '1', name: 'Department 1' },
    { id: '2', name: 'Department 2' },
];


// Validation schemas for each step
const validationSchemas = [
    Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        gender:Yup.string().required('Gender is required'),
        joiningdate:Yup.string().required('Joining Date is required'),
        birthdate:Yup.string().required('Birth Date is required')
    }),
    Yup.object().shape({
        addressLine1: Yup.string().required('Address Line 1 is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zip: Yup.string().required('Zip Code is required'),
    }),
    Yup.object().shape({
        businessUnit: Yup.string().required('Business Unit is required'),
        department: Yup.string().required('Department is required'),
        section: Yup.string().required('Section is required'),
        officeLocation: Yup.string().required('Office Location is required'),
    }),
];

// Main Component
const EmployeeFormStepper = () => {
    const [activeStep, setActiveStep] = useState(0);

    // Handle Step Change
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(activeStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Final Submit
    const handleSubmit = (values) => {
        console.log('Final Values: ', values);
        // Here you can send the form data to the server
    };

    return (
        <Box sx={{ width: '100%', padding: '2rem' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    addressLine1: '',
                    city: '',
                    state: '',
                    zip: '',
                    officeLocation: '',
                    position: '',
                    businessUnit: '',
                    department: '',
                    section: '',
                    gender:'',
                    position:'',
                    joiningdate:'',
                    birthdate:''
                }}
                validationSchema={validationSchemas[activeStep]}
                onSubmit={(values, { setSubmitting }) => {
                    if (activeStep === steps.length - 1) {
                        handleSubmit(values);
                    } else {
                        handleNext();
                    }
                    setSubmitting(false); // Allow further submissions
                }}
            >
                {({ isSubmitting, isValid, dirty }) => (
                    <Form>
                        <Box sx={{ mt: 2 }}>
                            {activeStep === 0 && (
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <InputField name="firstName" label="First Name" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputField name="lastName" label="Last Name" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <RadioGroupField
                                            name="gender"
                                            label="Gender"
                                            data={[
                                                { value: 'male', label: 'Male' },
                                                { value: 'female', label: 'Female' },
                                                { value: 'other', label: 'Other' }
                                            ]}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputField name="email" label="Email" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputField name="phone" label="Phone" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <DateField name="joiningdate" label="Joining Date" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <DateField name="birthdate" label="Birth Date" />
                                    </Grid>
                                </Grid>
                            )}

                            {activeStep === 1 && (
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <InputField name="addressLine1" label="Address Line 1" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputField name="city" label="City" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputField name="state" label="State" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputField name="zip" label="Zip Code" />
                                    </Grid>
                                </Grid>
                            )}

                            {activeStep === 2 && (
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <InputField name="officeLocation" label="Office Location" required />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectField
                                            name="businessUnit"
                                            label="Business Unit"
                                            data={businessUnits}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <SelectField
                                            name="department"
                                            label="Department"
                                            data={departments}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <InputField name="position" label="Position" />
                                    </Grid>
                                </Grid>
                            )}
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="outlined"
                            >
                                Back
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting || !(isValid && dirty)} // Enable only if valid and dirty
                            >
                                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default EmployeeFormStepper;
