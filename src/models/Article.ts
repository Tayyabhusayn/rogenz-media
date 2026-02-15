import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name'],
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);
