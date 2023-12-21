let yaş;

do {
  yaş = prompt("Lütfen yaşınızı giriniz : ");
  document.write(Number(yaş));

  if (isNaN(yaş)) {
    alert("Lütfen düzeltiniz, sadece sayı giriniz.");
  } else if (Number(yaş) < 0 || Number(yaş) > 111) {
    alert("Lütfen insan yaşı giriniz, 1 ile 110 arası kabul edilmektedir.");
  } else if (
    yaş.startsWith("+") &&
    !yaş.slice(1).includes("+") &&
    !yaş.slice(1).includes("-") &&
    !yaş.slice(1).includes("*") &&
    !yaş.slice(1).includes("/")
  ) {
    yaş = Number(yaş.slice(1));
    break;
  } else {
    break;
  }
} while (true);
