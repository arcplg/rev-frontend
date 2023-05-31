export default defineNuxtPlugin(() => {
  return {
    provide: {
      // --------------------------------------------------
      // WebStorageのgetItem
      // --------------------------------------------------
      getWebStorageItem (storageType, key) {
        let storage
        try {
          storage = window[storageType]
          const fullkey = 'RS_LINE_APP:osaki:' + key
          const value = storage.getItem(fullkey)
          return value
        } catch (e) {
          return false
        }
      },
      // --------------------------------------------------
      // WebStorageのsetItem
      // --------------------------------------------------
      setWebStorageItem (storageType, key, value) {
        let storage
        try {
          storage = window[storageType]
          const fullkey = 'RS_LINE_APP:osaki:' + key
          storage.setItem(fullkey, value)
          return true
        } catch (e) {
          return false
        }
      },
    },
  }
})
