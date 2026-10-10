import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Initialize Supabase Client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * POST /api/leaderboard
 * Appends a new score and full name to the leaderboard
 */
app.post('/api/leaderboard', async (req, res) => {
  const { full_name, score } = req.body;

  // Simple validation
  if (!full_name || score === undefined) {
    return res.status(400).json({ error: 'Missing full_name or score in request body' });
  }

  try {
    // Directly insert/append the data into the 'leaderboard' table
    const { data, error } = await supabase
      .from('leaderboard')
      .insert([
        { 
          full_name: full_name, 
          score: parseInt(score, 10) 
        }
      ])
      .select(); // Returns the inserted row

    if (error) {
      throw error;
    }

    return res.status(201).json({
      message: 'Leaderboard updated successfully!',
      entry: data[0]
    });

  } catch (error) {
    return res.status(500).json({ 
      error: 'Failed to insert leaderboard data', 
      details: error.message 
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
