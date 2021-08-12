import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_UPLOAD } from "../../../../store/actionNames/actionNames";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import useStyles from "./multiSignupSteps.style";
import CustomTextField from "../../../customTextField/customTextField";
import BackImage from "../../../../assets/images/signup/back.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import pictureImage from "../../../../assets/images/signup/picture.svg";
import { BusinessInfoModel } from "../../../../interfaces/businessInfo";
import { BUSINESS_INFO } from "../../../../store/actionNames/actionNames";
import { uploadFileTypes } from "../../../../constants/requestTypes";

interface CompanyLogoRootState {
  imageUrls: string;
}

interface StepsProps {
  setStep: (e: string) => void;
}

const BusinessInfo: React.FC<StepsProps> = ({ setStep }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentUser = useSelector((state: any) => state.currentUser);
  const [uploadedImage, setUploadedImage] = useState<string>("");

  const uploadedCompanyLogoImage = useSelector(
    (state: CompanyLogoRootState) => state.imageUrls
  );

  const formik = useFormik({
    initialValues: {
      companyName: "",
      website: "",
      street: "",
      city: "",
      state: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string().required("Required"),
      website: Yup.string().required("Required"),
      street: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      state: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const businessInfoData: BusinessInfoModel = {
        name: values.companyName,
        website: values.website,
        logo: uploadedImage,
        address: {
          streetAddress: values.street,
          city: values.city,
          state: values.state,
        },
      };
      dispatch({
        type: BUSINESS_INFO,
        payLoad: { data: businessInfoData, user: currentUser.accessToken },
      });
      setStep("additional business");
    },
  });

  const handleUpload = () => {
    const fileInputElement = fileInputRef.current;
    fileInputElement?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      const fileUploaded = e.currentTarget.files[0];
      const data = new FormData();
      data.append("imageFile", fileUploaded);
      dispatch({
        type: IMAGE_UPLOAD,
        payLoad: { file: data, user: currentUser.accessToken, type: uploadFileTypes.logo },
      });
    }
  };

  useEffect(() => {
    setUploadedImage(uploadedCompanyLogoImage);
  }, [uploadedCompanyLogoImage]);
  return (
    <React.Fragment>
      <Box
        className={classes.backButton}
        onClick={() => setStep("create account")}
      >
        <img src={BackImage} alt="back button" />
        <span>Back</span>
      </Box>
      <Typography variant="body1" className={classes.stepText}>
        STEP 1 / 2{" "}
      </Typography>
      <Typography variant="h1" className={classes.signupTitle}>
        Add your business info
      </Typography>
      <Grid className={classes.signupForm}>
        <Typography variant="body1" className={classes.inputSectionLabel}>
          Company information
        </Typography>
        <Box>
          <CustomTextField
            label="Company name"
            name="companyName"
            type="text"
            value={formik.values.companyName}
            setValue={formik.handleChange}
          />
          {formik.touched.companyName && formik.errors.companyName ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.companyName}
            </Typography>
          ) : null}
        </Box>
        <Box>
          <CustomTextField
            label="Website"
            name="website"
            type="text"
            value={formik.values.website}
            setValue={formik.handleChange}
          />
          {formik.touched.website && formik.errors.website ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.website}
            </Typography>
          ) : null}
        </Box>
        <Box>
          <CustomTextField
            label="Street address"
            name="street"
            type="text"
            value={formik.values.street}
            setValue={formik.handleChange}
          />
          {formik.touched.street && formik.errors.street ? (
            <Typography variant="body1" className={classes.inputErrorMessage}>
              {formik.errors.street}
            </Typography>
          ) : null}
        </Box>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          className={classes.inputsRow}
        >
          <Box className={classes.halfWidthInput}>
            <CustomTextField
              label="City"
              name="city"
              type="text"
              value={formik.values.city}
              setValue={formik.handleChange}
            />
            {formik.touched.city && formik.errors.city ? (
              <Typography variant="body1" className={classes.inputErrorMessage}>
                {formik.errors.city}
              </Typography>
            ) : null}
          </Box>
          <Box className={classes.halfWidthInput}>
            <CustomTextField
              label="State"
              name="state"
              type="text"
              value={formik.values.state}
              setValue={formik.handleChange}
            />
            {formik.touched.state && formik.errors.state ? (
              <Typography variant="body1" className={classes.inputErrorMessage}>
                {formik.errors.state}
              </Typography>
            ) : null}
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.inputsRow}
        >
          <Typography variant="body1" className={classes.inputSectionLabel}>
            Upload your company logo
          </Typography>
          <Typography variant="body1" className={classes.optionalText}>
            (Optional)
          </Typography>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.companyLogoUploadSection}
        >
          {uploadedImage === "" && (
            <Box className={classes.companyLogoImage}>
              <img src={pictureImage} alt="company logo" />
            </Box>
          )}
          {uploadedImage && uploadedImage.length > 0 && (
            <img
              src={uploadedImage}
              className={classes.companyLogoImageItem}
              alt="company logo"
            />
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleChange}
            accept=".png,.jpg,.gif,.PNG"
            className={classes.fileInput}
          />
          <Box onClick={() => handleUpload()} className={classes.uploadButton}>
            <Typography variant="body1" className={classes.uploadText}>
              Upload a picture
            </Typography>
          </Box>
          <Typography className={classes.supportText} variant="body2">
            Supports: PNG, JPG & GIF
          </Typography>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.continueButton}
          onClick={() => formik.handleSubmit()}
        >
          Continue
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default BusinessInfo;
