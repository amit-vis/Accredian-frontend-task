import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useHero } from '../../context/Hero';


export const ReferalForm = () => {
    const { open, handleClose, validationSchema, referalDetails, setReferalDetails, handleSubmitDetails } = useHero();

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h6" component="h2">
                        Refer a Friend
                    </Typography>
                    <Formik
                        initialValues={{
                            referrerName: referalDetails.referrerName,
                            referrerEmail: referalDetails.referrerEmail,
                            refereeName: referalDetails.refereeName,
                            refereeEmail: referalDetails.refereeEmail,
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setReferalDetails(values);
                            console.log("Submitting Form Values:", values);
                            handleSubmitDetails();
                            setSubmitting(false);
                        }}
                    >
                        {({ errors, touched, handleChange, handleBlur, values }) => (
                            <Form>
                                <TextField
                                    name="referrerName"
                                    label="Your Name"
                                    fullWidth
                                    margin="normal"
                                    value={values.referrerName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.referrerName && Boolean(errors.referrerName)}
                                    helperText={touched.referrerName && errors.referrerName}
                                />
                                <TextField
                                    name="referrerEmail"
                                    label="Your Email"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    value={values.referrerEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.referrerEmail && Boolean(errors.referrerEmail)}
                                    helperText={touched.referrerEmail && errors.referrerEmail}
                                />
                                <TextField
                                    name="refereeName"
                                    label="Friend's Name"
                                    fullWidth
                                    margin="normal"
                                    value={values.refereeName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.refereeName && Boolean(errors.refereeName)}
                                    helperText={touched.refereeName && errors.refereeName}
                                />
                                <TextField
                                    name="refereeEmail"
                                    label="Friend's Email"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    value={values.refereeEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.refereeEmail && Boolean(errors.refereeEmail)}
                                    helperText={touched.refereeEmail && errors.refereeEmail}
                                />
                                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '16px' }}>
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>
                
            </Modal>
        </>
    );
}