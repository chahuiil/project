/* Edit the content here. Paths are relative to index.html. Empty links stay disabled.
   Full editing and publishing instructions: README.md (한국어). */
window.PROJECT = {
  name: 'PROJECT NAME',
  title: 'Your paper title goes here.',
  subtitle: 'A concise sentence that captures the central idea of your research.',
  venue: 'Research project',
  draft: true, // Set false when all placeholder content has been replaced.
  authors: [
    { name: 'First Author', affiliation: '1', equal: true, url: '' },
    { name: 'Second Author', affiliation: '1,2', equal: true, url: '' },
    { name: 'Third Author', affiliation: '2', equal: false, url: '' }
  ],
  affiliations: ['Institution / Laboratory', 'Collaborating Institution'],
  links: { paper: '', arxiv: '', code: '' },
  teaser: { src: '', poster: '', caption: 'Add a short caption describing the main demonstration.' },
  tldr: 'Add the one key idea you want visitors to remember about your paper.',
  abstract: 'Introduce the problem, explain the core idea of your approach, and summarize the main findings. Replace this text with your paper’s abstract when it is ready.',
  demoGroups: [
    { name: 'Table', description: 'Table domain', items: [
      { title: 'Table', detail: '', src: 'assets/videos/demo_table.mp4', poster: '' }
    ] },
    { name: 'Floor', description: 'Floor domain', items: [
      { title: 'Floor', detail: '', src: 'assets/videos/demo_floor.mp4', poster: '' }
    ] },
    { name: 'Wall (high-height)', description: 'Wall domain (high-height)', items: [
      { title: 'Wall (high-height)', detail: '', src: '', poster: '' }
    ] },
    { name: 'Wall (low-height)', description: 'Wall domain (low-height)', items: [
      { title: 'Wall (low-height)', detail: '', src: '', poster: '' }
    ] },
    { name: 'Stair', description: 'Stair domain', items: [
      { title: 'Stair', detail: '', src: '', poster: '' }
    ] }
  ],
  method: {
    intro: 'Explain how your approach works. Start with the main insight, then use the overview figure to connect the components.',
    image: '', alt: 'Method overview figure', caption: 'Add the method overview figure and its caption.',
    steps: [
      { title: 'The challenge', text: 'What makes the problem difficult, and why do existing approaches fall short?' },
      { title: 'The key insight', text: 'Describe the central contribution and how it addresses the challenge.' },
      { title: 'The outcome', text: 'Explain what the method enables, supported by your experimental evidence.' }
    ]
  },
  results: { image: '', alt: 'Experimental results figure', caption: 'Add a results plot, comparison table, or ablation figure.', text: 'Summarize the main experimental findings here. Include only measurements supported by the paper.' },
  bibtex: '', // Paste the final BibTeX record here, using a backtick-delimited string.
  footer: 'Research project page',
};
