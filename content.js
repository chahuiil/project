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
  links: { paper: '', arxiv: '', code: '', video: '' },
  teaser: { src: '', poster: '', caption: 'Add a short caption describing the main demonstration.' },
  tldr: 'Add the one key idea you want visitors to remember about your paper.',
  abstract: 'Introduce the problem, explain the core idea of your approach, and summarize the main findings. Replace this text with your paper’s abstract when it is ready.',
  demoGroups: [
    { name: 'Real-world', description: 'Show your method in action in the real world.', items: [
      { title: 'Main demonstration', detail: 'Describe the task and experimental setting.', src: '', poster: '' },
      { title: 'A second perspective', detail: 'Add another task, environment, or viewpoint.', src: '', poster: '' },
      { title: 'Beyond the main setting', detail: 'Show additional experimental coverage.', src: '', poster: '' }
    ] },
    { name: 'Simulation', description: 'Explore experiments in a controlled simulation environment.', items: [
      { title: 'Simulation demonstration', detail: 'Describe the simulated environment and task.', src: '', poster: '' },
      { title: 'Additional environment', detail: 'Add a second simulated setting.', src: '', poster: '' }
    ] },
    { name: 'Comparisons', description: 'Compare methods under the same experimental conditions.', items: [
      { title: 'Our method', detail: 'Add your method’s comparison video.', src: '', poster: '' },
      { title: 'Baseline', detail: 'Add the corresponding baseline video.', src: '', poster: '' }
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
