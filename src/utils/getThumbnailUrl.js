const getThumbnailUrl = (data, aspect) => {
  return data.thumbnail.path + `/${aspect}.` + data.thumbnail.extension;
};

export default getThumbnailUrl;
