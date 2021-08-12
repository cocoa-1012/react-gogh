import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid,
  Typography,
  Box,
  Fade,
  Modal,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import useStyles from "./servicesActionModal.style";
import CustomTextField from "../customTextField/customTextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomSwitch from "../customSwitch/customSwitch";
import { IMAGE_UPLOAD } from "../../store/actionNames/actionNames";
import { uploadFileTypes } from "../../constants/requestTypes";
import pictureImage from "../../assets/images/signup/picture.svg";
import { LogInUserTokens } from "../../interfaces/userModels";
import closeIcon from "../../assets/images/close.svg";
import CheckMark from "../../assets/images/login/checkmark.svg";
import { MyServicesDataModel } from "../../interfaces/myServices";
import CustomSelectBox from "../customSelect/customSelect";
import moment from "moment";
import { pricingType } from "../../constants/requestTypes";
import _ from 'lodash';

const selectItems: string[] = [
  "category1",
  "category2",
  "category3",
  "category4",
];

interface ServicesActionModalProps {
  addServicesModal: boolean;
  setAddServicesModal: (modalOpen: boolean) => void;
  currentUser: LogInUserTokens;
  addNewService: (item: MyServicesDataModel) => void;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  editItem: MyServicesDataModel | undefined;
  editService: (service: MyServicesDataModel) => void;
}

interface ImageItem {
  imageURL: string;
  isCoverPhoto: boolean;
}

interface portfolioImageRootState {
  imageUrls: string;
}

const ServicesActionModal: React.FC<ServicesActionModalProps> = ({
  addServicesModal,
  setAddServicesModal,
  currentUser,
  addNewService,
  isEdit,
  setIsEdit,
  editItem,
  editService,
}) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedImages, setUploadedImages] = useState<ImageItem[]>([]);
  const [uploadBoxActive, setUploadBoxActive] = useState<boolean>(false);
  const [tagText, setTagText] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [pricing, setPricing] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const classes = useStyles({ pricing, uploadBoxActive });
  const isMobile = useMediaQuery("(max-width:570px)");

  const coveredImage = uploadedImages.filter(
    (item: ImageItem) => item.isCoverPhoto === true
  );

  const portfolioImage = useSelector(
    (state: portfolioImageRootState) => state.imageUrls
  );

  const clearModal = () => {
    setUploadedImages(isEdit && editItem !== undefined
      ? editItem.photos.map((item: string, i: number) => {
        return { imageURL: item, isCoverPhoto: i === editItem.coverPhotoIndex ? true : false };
      })
      : []);
    setTags(isEdit && editItem !== undefined ? editItem.tags : []);
    setPricing(isEdit && editItem !== undefined
      ? editItem.pricingType === 1
        ? false
        : true
      : false);
    setCategory(isEdit && editItem !== undefined ? editItem.category : "");
    formik.values.serviceName = isEdit && editItem !== undefined ? editItem.name : "";
    formik.values.description = isEdit && editItem !== undefined ? editItem.description : "";
    formik.values.price = isEdit && editItem !== undefined ? editItem.amount : 0;
  }

  const formik = useFormik({
    initialValues: {
      serviceName: "",
      price: 0,
      description: "",
    },
    validationSchema: Yup.object({
      serviceName: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      description: Yup.string().max(200).required("Required"),
    }),
    onSubmit: (values) => {
      const newService: MyServicesDataModel = {
        id: isEdit && editItem !== undefined ? editItem.id : null,
        createdAt: isEdit && editItem !== undefined ? editItem.createdAt : moment().toISOString(),
        updatedAt: moment().toISOString(),
        isDeleted: false,
        name: values.serviceName,
        description: values.description,
        category: category,
        pricingType: !pricing ? pricingType.hourly : pricingType.fixedPrice,
        amount: values.price,
        companyId: isEdit && editItem !== undefined ? editItem.companyId : null,
        coverPhotoIndex: uploadedImages.findIndex((item: ImageItem) => item.isCoverPhoto === true),
        photos: uploadedImages.map((item: ImageItem) => {
          return item.imageURL;
        }),
        tags: tags,
        companyCity: isEdit && editItem !== undefined ? editItem.companyCity : null,
        companyState: isEdit && editItem !== undefined ? editItem.companyState : null,
      };
      if (category === "") alert("Please select the service category.");
      if (uploadedImages.length === 0) alert("Please upload portfolio");
      if (tags.length === 0) alert("Please input tags.");
      if ((category !== "" && uploadedImages.length !== 0 && tags.length !== 0) && !isEdit) {
        addNewService(newService);
        setAddServicesModal(false);
        clearModal()
      }
      else {
        editService(newService);
        setAddServicesModal(false);
        setIsEdit(false);
      }
    },
  });

  useEffect(() => {
    clearModal();
  }, [isEdit]);

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setUploadBoxActive(true);
  };

  const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setUploadBoxActive(false);
  };

  const fileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setUploadBoxActive(false);
    if (uploadedImages.length !== 5) {
      const fileUploaded = e.dataTransfer.files[0];
      const data = new FormData();
      data.append("imageFile", fileUploaded);
      dispatch({
        type: IMAGE_UPLOAD,
        payLoad: {
          file: data,
          user: currentUser.accessToken,
          type: uploadFileTypes.portfolio,
        },
      });
    } else {
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
          payLoad: {
            file: data,
            user: currentUser.accessToken,
            type: uploadFileTypes.portfolio,
          },
        });
      } else {
        alert("You can upload max 5 photos.");
      }
    }
  };

  useEffect(() => {
    if (
      uploadedImages.length !== 0 &&
      portfolioImage === uploadedImages[uploadedImages.length - 1].imageURL
    ) {
      return;
    } else {
      if (portfolioImage.length !== 0) {
        setUploadedImages([
          ...uploadedImages,
          {
            imageURL: portfolioImage,
            isCoverPhoto: uploadedImages.length == 0 ? true : false,
          },
        ]);
      } else {
        return;
      }
    }
  }, [portfolioImage]);

  const setConverImage = (imageURL: string) => {
    let virtualData = uploadedImages.map((imageItem: ImageItem) => ({
      ...imageItem,
      isCoverPhoto: false,
    }));
    const index = uploadedImages.findIndex(
      (imageItem: ImageItem) => imageItem.imageURL === imageURL
    );
    virtualData[index] = { ...virtualData[index], isCoverPhoto: true };
    setUploadedImages(virtualData);
  };
  return (
    <Modal
      open={addServicesModal}
      onClose={() => {
        setAddServicesModal(false);
        setIsEdit(false);
      }}
      className={classes.addServicesModal}
    >
      <Fade in={addServicesModal}>
        <Box className={classes.addServicesModalBody}>
          <Box
            className={classes.closeModalButton}
            onClick={() => {
              setAddServicesModal(false);
              setIsEdit(false);
            }}
          >
            <img src={closeIcon} alt="close modal" />
          </Box>
          <Typography variant="h1" className={classes.addServicesModalTitle}>
            {isEdit && editItem !== undefined ? "Edit a service" : "Add a service"}
          </Typography>
          <Grid
            container
            direction="row"
            spacing={3}
            className={classes.addServicesFormWrapper}
          >
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                className={classes.addServicesModalSubTitle}
              >
                Name of the service
              </Typography>
              <CustomTextField
                label="Enter the name of your service"
                name="serviceName"
                type="text"
                value={formik.values.serviceName}
                setValue={formik.handleChange}
              />
              <Typography
                variant="body1"
                className={classes.addServicesModalSubTitle}
              >
                Pricing structure
              </Typography>
              <Grid
                container
                direction={isMobile ? "column" : "row"}
                justify="space-between"
                alignItems={isMobile ? "stretch" : "center"}
                spacing={3}
              >
                <Grid
                  item
                  xs={isMobile ? 12 : 6}
                  className={classes.pricingSwitchWrapper}
                >
                  <Typography
                    variant="body1"
                    className={`${classes.addServicesModalSubTitle} ${classes.addServicesHourlyText}`}
                  >
                    Hourly
                  </Typography>
                  <CustomSwitch checked={pricing} toggle={setPricing} />
                  <Typography
                    variant="body1"
                    className={`${classes.addServicesModalSubTitle} ${classes.addServicesFixedText}`}
                  >
                    Fixed price
                  </Typography>
                </Grid>
                <Grid item xs={isMobile ? 12 : 6}>
                  <Box className={classes.pricingAmount}>
                    <CustomTextField
                      label="Amount"
                      name="price"
                      type="number"
                      value={formik.values.price}
                      setValue={formik.handleChange}
                    />
                    <Typography
                      variant="body1"
                      className={classes.pricingAmountUnit}
                    >
                      {pricing ? "$" : "$ / h"}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Typography
                variant="body1"
                className={classes.addServicesModalSubTitle}
              >
                Service category
              </Typography>
              <CustomSelectBox
                items={selectItems}
                selected={category}
                setSelection={setCategory}
              />
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  className={classes.addServicesModalSubTitle}
                >
                  Description
                </Typography>
                <Typography variant="body1" className={classes.describeText}>
                  Characters {formik.values.description.length} / 200
                </Typography>
              </Grid>
              <textarea
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                className={classes.myServicesDescriptionTextArea}
                placeholder="Describe the service you are offering"
              />
              {formik.values.description.length > 200 ? <Typography
                className={classes.descriptionNotification}>
                The length of description must be less than 200 characters
                </Typography> : <></>}
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  className={classes.addServicesModalSubTitle}
                >
                  Upload portfolio photos of your service
                </Typography>
                <Typography variant="body1" className={classes.describeText}>
                  Max. 5 photos
                </Typography>
              </Grid>
              <Grid
                container
                direction={isMobile ? "column" : "row"}
                alignItems={isMobile ? "stretch" : "center"}
                spacing={3}
              >
                <Grid item xs={isMobile ? 12 : 6}>
                  <Box
                    className={classes.imageDragArea}
                    onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}
                  >
                    <img src={pictureImage} alt="additional business" />
                    <Typography
                      variant="body1"
                      className={classes.imageDropText}
                    >
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
                </Grid>
                <Grid item xs={isMobile ? 12 : 6}>
                  <Box
                    className={classes.converedImagePreviewBox}
                    style={{
                      backgroundImage:
                        coveredImage && coveredImage.length > 0
                          ? `url(${coveredImage[0].imageURL})`
                          : "linear-gradient(to bottom, #F6F6FB, #cacae7)",
                    }}
                  >
                    <Typography
                      variant="body1"
                      className={classes.coverPhotoText}
                    >
                      Cover photo
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={3}
              >
                {uploadedImages.length !== 0 &&
                  uploadedImages.map((image: ImageItem, i: number) => (
                    <Grid
                      item
                      xs={2}
                      key={i}
                      className={classes.portfolioImageContainer}
                    >
                      <Box
                        className={classes.portfolioImageWrapper}
                        style={{ backgroundImage: `url(${image.imageURL})` }}
                      >
                        <Box
                          className={classes.closeButton}
                          onClick={() =>
                            setUploadedImages(
                              uploadedImages.filter(
                                (item: ImageItem) =>
                                  item.imageURL !== image.imageURL
                              )
                            )
                          }
                        >
                          <img src={closeIcon} alt="close" />
                        </Box>
                      </Box>
                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        className={classes.imageCoverCheckSection}
                        onClick={() => setConverImage(image.imageURL)}
                      >
                        <Box
                          className={`${classes.imageCoverCheckBox} ${image.isCoverPhoto
                            ? classes.imageCoverCheckBoxChecked
                            : ""
                            }`}
                        >
                          {image.isCoverPhoto && (
                            <img src={CheckMark} alt="check mark" />
                          )}
                        </Box>
                        <Typography
                          variant="body1"
                          className={`${classes.imageCoverText} ${image.isCoverPhoto
                            ? classes.imageCoverTextChecked
                            : ""
                            }`}
                        >
                          Cover
                        </Typography>
                      </Grid>
                    </Grid>
                  ))}
              </Grid>
              <Typography
                variant="body1"
                className={classes.addServicesModalSubTitle}
              >
                Tags
              </Typography>
              <Box className={classes.tagInputWrapper}>
                <CustomTextField
                  label="Type to add tags"
                  name="tag"
                  type="text"
                  value={tagText}
                  setValue={(e) =>
                    tagText.length < 12 ? setTagText(e.target.value)
                      : tagText.includes(",")
                        ? setTagText(e.target.value)
                        : setTagText(e.target.value.slice(0, 12))}
                  onKeyDown={(e: any) => {
                    if (e.keyCode === 13 && e.target.value !== "") {
                      if (tagText !== "") {
                        if (tagText.includes(",")) {
                          let newTagText = tagText.split(",");
                          let newTags = _.union(tags, newTagText);
                          setTags(newTags);
                          setTagText("");
                          return;
                        }
                        if (tags.some((item: any) => item === tagText)) {
                          setTagText("");
                          return;
                        }
                        setTags([...tags, tagText]);
                        setTagText("");
                      }
                    }
                  }}
                />
                <Typography
                  variant="body1"
                  className={classes.tagsAddButton}
                  onClick={() => {
                    if (tagText !== "") {
                      if (tagText.includes(",")) {
                        let newTagText = tagText.split(",");
                        let newTags = _.union(tags, newTagText);
                        setTags(newTags);
                        setTagText("");
                        return;
                      }
                      if (tags.some((item: any) => item === tagText)) {
                        setTagText("");
                        return;
                      }
                      setTags([...tags, tagText]);
                      setTagText("");
                    }
                  }}
                >
                  Add
                </Typography>

              </Box>
              <Grid container direction="row" alignItems="center">
                {tags.length !== 0 &&
                  tags.map((tag: string, i: number) => (
                    <Box key={i} className={classes.tags}>
                      <Typography variant="body1" className={classes.tagText}>
                        {tag}
                      </Typography>
                      <img
                        src={closeIcon}
                        alt="close"
                        className={classes.deleteTag}
                        onClick={() =>
                          setTags(tags.filter((item: string) => item !== tag))
                        }
                      />
                    </Box>
                  ))}
              </Grid>
              <Grid container direction="row" justify="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => formik.handleSubmit()}
                >
                  {isEdit && editItem !== undefined ? "Edit a service" : "Add a service"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ServicesActionModal;
