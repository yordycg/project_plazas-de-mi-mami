// Toastr configuration
toastr.options = {
  closeButton: true,
  progressBar: true,
  showMethod: "slideDown",
  positionClass: "toast-top-right",
  timeOut: 4000,
  showDuration: 300,
  hideDuration: 2000,
  closeOnHover: true,
};

// Class notification
export default class Notification {
  static error(message) {
    return toastr.error(`${message}`, "Error");
  }
  static success(message) {
    return toastr.success(`${message}`, "Éxito");
  }
  static warning(message) {
    return toastr.warning(`${message}`, "Advertencia");
  }
  static info(message) {
    return toastr.info(`${message}`, "Información");
  }
}
