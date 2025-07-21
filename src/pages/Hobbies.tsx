import React, { useState } from 'react';
import GradientText from '../components/GradientText';
import { BookOpen, Heart, Star, Moon } from 'lucide-react';

const poems = [
  {
    id: 1,
    title: "Cosmic Wanderer",
    content: `Among the stars I find my peace,
Where silence echoes through the void,
And time itself seems to cease,
In this space I am overjoyed.

The nebulae dance in colors bright,
Painting stories across the dark,
While planets spin in endless flight,
Each one a celestial spark.

In this vastness I am small,
Yet connected to it all,
A wanderer among the stars,
Forever seeking what is ours.`,
    date: "2024"
  },
  {
    id: 2,
    title: "The Engineer's Dream",
    content: `In blueprints and equations I find my way,
Through calculations that bridge the known,
Each formula a stepping stone,
To futures we've yet to display.

The rocket's roar, the satellite's dance,
Born from dreams and careful thought,
What once was theory, now is wrought,
In this cosmic advancement.

From Earth to Mars, from here to there,
Engineering makes the impossible real,
With science as our steering wheel,
We venture forth without despair.`,
    date: "2023"
  },
  {
    id: 3,
    title: "Stellar Solitude",
    content: `In the quiet of the night,
When the world has gone to sleep,
I look up at the stellar deep,
And feel the universe's might.

Each star a distant sun,
With stories yet untold,
In their light, both young and old,
My cosmic journey has begun.

The Moon, our faithful guide,
Shares secrets from above,
In this space, I find my love,
For the cosmos far and wide.`,
    date: "2023"
  },
  {
    id: 4,
    title: "Beyond the Horizon",
    content: `Where the sky meets the endless sea,
And gravity loosens its hold,
New stories are yet to be told,
In this realm of possibility.

The horizon calls to me,
With promises of distant lands,
Where spacecraft built by human hands,
Will set our spirits free.

Mars awaits, Jupiter calls,
The asteroid belt beckons too,
In this journey, old and new,
We'll rise above it all.`,
    date: "2022"
  }
];

export default function Hobbies() {
  const [selectedPoem, setSelectedPoem] = useState(0);

  return (
    <div className="min-h-screen relative z-10 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GradientText className="text-6xl font-bold mb-6">
              Poetry & Reflections
            </GradientText>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exploring the cosmos through verse - where science meets soul
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Poem Selection */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-stellar-400" />
                  <h2 className="text-2xl font-bold text-white">Collection</h2>
                </div>
                
                {poems.map((poem, index) => (
                  <button
                    key={poem.id}
                    onClick={() => setSelectedPoem(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                      selectedPoem === index
                        ? 'bg-stellar-400/20 border-stellar-400/50 text-white'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        selectedPoem === index ? 'bg-stellar-400' : 'bg-gray-500'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold">{poem.title}</h3>
                        <p className="text-sm opacity-75">{poem.date}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Poem Display */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Scroll Background */}
                <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                  {/* Scroll texture overlay */}
                  <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-amber-800 to-yellow-800"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full opacity-20"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full opacity-20"></div>
                  
                  {/* Poem content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex gap-2">
                        <Star className="w-6 h-6 text-amber-700" />
                        <Heart className="w-6 h-6 text-amber-700" />
                        <Moon className="w-6 h-6 text-amber-700" />
                      </div>
                      <div className="h-1 bg-amber-600 flex-1 rounded"></div>
                    </div>
                    
                    <h2 className="text-4xl font-bold text-amber-900 mb-4 font-serif">
                      {poems[selectedPoem].title}
                    </h2>
                    
                    <div className="text-amber-800 font-mono text-lg leading-relaxed whitespace-pre-line">
                      {poems[selectedPoem].content}
                    </div>
                    
                    <div className="mt-8 flex items-center justify-between">
                      <div className="h-1 bg-amber-600 flex-1 rounded"></div>
                      <div className="text-amber-700 font-medium px-4">
                        Written in {poems[selectedPoem].date}
                      </div>
                      <div className="h-1 bg-amber-600 flex-1 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Aged paper effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-200/30 to-amber-300/30 rounded-2xl"></div>
                </div>
                
                {/* Scroll shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800/30 to-yellow-800/30 rounded-2xl transform translate-x-2 translate-y-2 -z-10"></div>
              </div>
              
              {/* Poem insights */}
              <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">About This Piece</h3>
                <p className="text-gray-300 leading-relaxed">
                  This poem reflects my deep connection with the cosmos and how my engineering background 
                  influences my perspective on the universe. Each verse captures a moment of wonder and 
                  contemplation about our place in the vast expanse of space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}