function updateFielsetDispaly(fieldsetName, isVisible) {
  const $ele = $(`.fieldset-${fieldsetName}`);
  if (!$ele) return;
  if (isVisible) {
    $ele.removeClass('hidden');
  } else {
    $ele.addClass('hidden');
  }
}

function updateFilteredDisplay(statusCodes) {
  $('.filtered').each(function filteredCallback() {
    const $ele = $(this);
    if ($ele.attr('data-status')) {
      if (statusCodes.includes($ele.attr('data-status'))) {
        $ele.removeClass('hidden');
      } else {
        $ele.addClass('hidden');
      }
    }
  });
}

function updateContent() {
  const activeStatusCodes = [];
  $('input[type=checkbox]').each(function checkboxCallback() {
    const $ele = $(this);
    if ($ele.attr('data-fieldset')) {
      updateFielsetDispaly($ele.attr('data-fieldset'), $ele.prop('checked'));
    } else if ($ele.attr('data-status')) {
      if ($ele.prop('checked')) activeStatusCodes.push($ele.attr('data-status'));
    }
  });
  updateFilteredDisplay(activeStatusCodes);
}

$('input[type=checkbox]').on('click', () => {
  updateContent();
});
