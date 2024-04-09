export const useScrollFixed = (isOpen:Ref<boolean>) => {
    const handleKeyUp = (event:KeyboardEvent) => {
      if (event.key === "Escape") {
        // eslint-disable-next-line no-param-reassign
        isOpen.value = false;
      }
    };
    watch(() => isOpen.value, async (newValue) => {
      if (newValue) {
        document.body.style.overflow = "hidden";
        document.addEventListener("keyup", handleKeyUp);
      } else {
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "auto";
      }
    });
  };