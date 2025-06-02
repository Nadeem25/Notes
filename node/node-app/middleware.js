export const appLogger = (req, res, next) => {
    console.log(`[APP-LOGGER] ${req.method} ${req.url}`);
  next();
}

export const errorHandler = (error, req, res, next) => {
    console.error('[ERROR]', error.message);
    res.status(500).json({message: error.message})
}