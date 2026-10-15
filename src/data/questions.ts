
export interface Question {
  id: number
  question: string
  options: string[]
  answer: number
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'What is the basic unit of life in animals?',
    options: ['Tissue', 'Organ', 'Cell', 'Organ system'],
    answer: 2,
  },
  {
    id: 2,
    question: 'Which organ pumps blood throughout an animal’s body?',
    options: ['Lungs', 'Heart', 'Liver', 'Kidneys'],
    answer: 1,
  },
  {
    id: 3,
    question: 'What is the main function of red blood cells?',
    options: [
      'Fight infections',
      'Digest food',
      'Transport oxygen',
      'Produce hormones',
    ],
    answer: 2,
  },
  {
    id: 4,
    question: 'Which organ is mainly responsible for gas exchange in mammals?',
    options: ['Stomach', 'Lungs', 'Pancreas', 'Spleen'],
    answer: 1,
  },
  {
    id: 5,
    question: 'What is the main function of the digestive system?',
    options: [
      'Produce movement',
      'Break down food and absorb nutrients',
      'Control body temperature only',
      'Transport oxygen',
    ],
    answer: 1,
  },
  {
    id: 6,
    question: 'Which group of animals has a backbone?',
    options: ['Invertebrates', 'Vertebrates', 'Arthropods only', 'Mollusks only'],
    answer: 1,
  },
  {
    id: 7,
    question: 'Which type of joint allows movement at the shoulder?',
    options: ['Hinge joint', 'Pivot joint', 'Ball-and-socket joint', 'Fixed joint'],
    answer: 2,
  },
  {
    id: 8,
    question: 'What is the primary function of the kidneys in mammals?',
    options: [
      'Pump blood',
      'Filter blood and produce urine',
      'Exchange oxygen',
      'Break down proteins in the stomach',
    ],
    answer: 1,
  },
  {
    id: 9,
    question: 'Which biological process allows animals to produce offspring?',
    options: ['Respiration', 'Excretion', 'Reproduction', 'Circulation'],
    answer: 2,
  },
  {
    id: 10,
    question: 'Which part of a neuron receives signals from other cells?',
    options: ['Axon', 'Dendrites', 'Myelin sheath', 'Synaptic vesicles'],
    answer: 1,
  },
]
