const getThumbnailUrl = (character, aspect) => {
  return (
    character.thumbnail.path + `/${aspect}.` + character.thumbnail.extension
  );
};

export default getThumbnailUrl;
