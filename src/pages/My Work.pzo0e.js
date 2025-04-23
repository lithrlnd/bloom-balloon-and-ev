import wixData from 'wix-data';

$w.onReady(function () {
  const repeater   = $w('#portfolioRepeater');
  const dataset    = $w('#portfolioDataset');
  const categoryDD = $w('#categoryDropdown');

  // Sort newest first
  dataset.onReady(() => {
    dataset.setSort(wixData.sort().descending('date'));
  });

  // Filter by category
  categoryDD.onChange(() => {
    const val = categoryDD.value;
    dataset.setFilter(
      val === 'All'
        ? wixData.filter()
        : wixData.filter().eq('category', val)
    );
  });

  // Hover animation
  repeater.onItemReady(($item) => {
    const card = $item('#cardBox');
    card.onMouseIn(() => card.addClass('hover'));
    card.onMouseOut(() => card.removeClass('hover'));
  });
});