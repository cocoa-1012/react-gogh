import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_UPLOAD, ADDITIONAL_BUSINESS_INFO } from "../../../../store/actionNames/actionNames";
import { Grid, Typography, Button, Box } from "@material-ui/core";
import useStyles from "./multiSignupSteps.style";
import BackImage from "../../../../assets/images/signup/back.svg";
import { LogInUserTokens } from "../../../../interfaces/userModels";
import { useFormik } from "formik";
import * as Yup from "yup";
import pictureImage from "../../../../assets/images/signup/picture.svg";
import checkIcon from "../../../../assets/images/signup/checkmark.svg";
import { useHistory } from "react-router-dom";
import { routers } from "../../../../config/routers";
import { uploadFileTypes } from "../../../../constants/requestTypes";
import { useLocalStorage } from "../../../../shared/hooks";

interface StepsProps {
  setStep: (e: string) => void;
}

interface AdditionalInfoRootState {
  imageUrls: string;
}

interface ImageItem {
  imageURL: string;
  fileName: string;
  imageSize: number;
  isCoverPhoto: boolean;
}

const AdditionalBusiness: React.FC<StepsProps> = ({ setStep }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageName, setImageName] = useState<string>("");
  const [imageSize, setImageSize] = useState<number>(0);
  const [uploadedImages, setUploadedImages] = useState<ImageItem[]>([]);
  // const [userToken, setUserToken] = useLocalStorage<LogInUserTokens>("userToken", {
  //   accessToken: "",
  //   refreshToken: "",
  // });

  const additionalInfoImage = useSelector(
    (state: AdditionalInfoRootState) => state.imageUrls
  );
  const currentUser = useSelector((state: any) => state.currentUser);
  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (uploadedImages.length !== 0) {
        const info = {
          description: values.description,
          companyPortfolio: uploadedImages.map((item: ImageItem) => {
            return {
              photo: item.imageURL,
              isCoverPhoto: item.isCoverPhoto,
            }
          })
        }
        dispatch({
          type: ADDITIONAL_BUSINESS_INFO,
          payLoad: { data: info, user: currentUser.accessToken }
        });
        history.push(routers.myServices);
      } else {
        alert("Please upload max 5 photos.");
      }
    },
  });

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const fileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (uploadedImages.length !== 5) {
      const fileUploaded = e.dataTransfer.files[0];
      setImageName(fileUploaded.name);
      const fileSize = (fileUploaded.size / 1000000).toFixed(2);
      setImageSize(parseFloat(fileSize));
      const data = new FormData();
      data.append("imageFile", fileUploaded);
      dispatch({
        type: IMAGE_UPLOAD,
        payLoad: { file: data, user: currentUser.accessToken, type: uploadFileTypes.portfolio },
      });
    }
    else {
      alert("You can upload max 5 photos.");
    }
  };

  const handleUpload = () => {
    const fileInputElement = fileInputRef.current;
    fileInputElement?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files !== null) {
      if (uploadedImages.length !== 5) {
        const fileUploaded = e.currentTarget.files[0];
        const data = new FormData();
        data.append("imageFile", fileUploaded);
        dispatch({
          type: IMAGE_UPLOAD,
          payLoad: { file: data, user: currentUser.accessToken, type: uploadFileTypes.portfolio },
        });
      }
      else {
        alert("You can upload max 5 photos.");
      }
    }
  };

  useEffect(() => {
    if (
      uploadedImages.length !== 0 &&
      additionalInfoImage === uploadedImages[uploadedImages.length - 1].imageURL
    ) {
      return;
    } else {
      if (imageName !== "" && imageSize !== 0) {
        setUploadedImages([
          ...uploadedImages,
          {
            imageURL: additionalInfoImage,
            fileName: imageName,
            imageSize: imageSize,
            isCoverPhoto: false,
          },
        ]);
      }
    }
  }, [additionalInfoImage]);

  const setAsCover = (url: string) => {
    let virtualData = uploadedImages.map((dataItem: ImageItem) => ({ ...dataItem, isCoverPhoto: dataItem.isCoverPhoto }));
    const index = uploadedImages.findIndex(
      (item: ImageItem) => item.imageURL === url
    );
    virtualData[index] = { ...virtualData[index], isCoverPhoto: true };
    setUploadedImages(virtualData);
  };

  const skipStep = () => {
    history.push(routers.myServices);
  };
  return (
    <React.Fragment>
      <button
        className={classes.backButton}
        onClick={() => setStep("business info")}
      >
        <img src={BackImage} alt="back button" />
        <span>Back</span>
      </button>
      <Typography variant="body1" className={classes.stepText}>
        STEP 2 / 2{" "}
      </Typography>
      <Typography variant="h1" className={classes.signupTitle}>
        Additional business info
      </Typography>
      <Grid className={classes.signupForm}>
        <Typography variant="body1" className={classes.inputSectionLabel}>
          Company description
        </Typography>
        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          className={classes.additionalBusinessTextarea}
          placeholder="Company description"
        ></textarea>
        {formik.touched.description && formik.errors.description ? (
          <Typography variant="body1" className={classes.inputErrorMessage}>
            {formik.errors.description}
          </Typography>
        ) : null}
        <Typography variant="body1" className={classes.inputSectionLabel}>
          Upload your company portfolio (5 photos max)
        </Typography>
        <Box
          className={classes.imageDragArea}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
        >
          <img src={pictureImage} alt="additional business" />
          <Typography variant="body1" className={classes.imageDropText}>
            Drop your image here or{" "}
            <span
              className={classes.imageDropTextButton}
              onClick={() => handleUpload()}
            >
              browse
            </span>
          </Typography>
          <Typography variant="body1" className={classes.supportText}>
            Supports: PNG, JPG & GIF
          </Typography>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleChange}
            accept=".png,.jpg,.gif,.PNG"
            className={classes.fileInput}
          />
        </Box>
        {uploadedImages.map((image: ImageItem, i: number) => (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            key={i}
            className={classes.imageItemWrapper}
          >
            <img
              src={image.imageURL}
              alt="info"
              className={classes.imageItem}
            />
            <Box className={classes.imageTitleBox}>
              <Typography variant="body1" className={classes.imageTitle}>
                {image.fileName}
              </Typography>
              <Typography variant="body2" className={classes.imageProperty}>
                {image.imageSize} Mbs
              </Typography>
            </Box>
            <Grid className={classes.imageItemActionsWrapper}>
              {image.isCoverPhoto === false && (
                <Box className={classes.coverButton}>
                  <Typography
                    variant="body1"
                    className={classes.coverButtonText}
                    onClick={() => setAsCover(image.imageURL)}
                  >
                    Set as cover photo
                  </Typography>
                </Box>
              )}
              {image.isCoverPhoto === true && (
                <Box className={classes.checkedAsCover}>
                  <img src={checkIcon} alt="check" />
                  <Typography variant="body1" className={classes.checkedAsCoverText}>Cover photo</Typography>
                </Box>
              )}
              <Typography
                variant="body1"
                className={classes.deleteButton}
                onClick={() =>
                  setUploadedImages(
                    uploadedImages.filter(
                      (item: ImageItem) => item.imageURL !== image.imageURL
                    )
                  )
                }
              >
                Delete
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Button
          variant="contained"
          color="primary"
          className={classes.continueButton}
          onClick={() => formik.handleSubmit()}
        >
          Continue
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={classes.skipButton}
          onClick={skipStep}
        >
          Skip this step
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default AdditionalBusiness;
