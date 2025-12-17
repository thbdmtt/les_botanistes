/**
 * Google Sheets client for menu data
 * Server-side only - never import in client components
 */
import { google } from 'googleapis';

// Environment variables required for Google Sheets access
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n');

/**
 * Raw row data from Google Sheets
 * Each row is an array of cell values (strings)
 */
export type SheetRow = string[];

/**
 * Result from reading a sheet
 */
export interface SheetData {
  headers: string[];
  rows: SheetRow[];
}

/**
 * Validates that all required environment variables are set
 * @throws Error if any required variable is missing
 */
function validateEnvVars(): void {
  const missing: string[] = [];

  if (!SPREADSHEET_ID) missing.push('GOOGLE_SHEETS_SPREADSHEET_ID');
  if (!CLIENT_EMAIL) missing.push('GOOGLE_SHEETS_CLIENT_EMAIL');
  if (!PRIVATE_KEY) missing.push('GOOGLE_SHEETS_PRIVATE_KEY');

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}`
    );
  }
}

/**
 * Creates an authenticated Google Sheets client
 * Uses Service Account credentials from environment variables
 */
function createSheetsClient() {
  validateEnvVars();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  return google.sheets({ version: 'v4', auth });
}

/**
 * Reads data from a specific sheet (tab) in the spreadsheet
 * @param sheetName - The name of the sheet/tab to read (e.g., 'Starters', 'Mains', 'Desserts')
 * @returns SheetData with headers and rows
 */
export async function readSheet(sheetName: string): Promise<SheetData> {
  const sheets = createSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A:Z`, // Read all columns
  });

  const values = response.data.values;

  if (!values || values.length === 0) {
    return { headers: [], rows: [] };
  }

  // First row is headers, rest are data rows
  const [headers, ...rows] = values;

  return {
    headers: headers as string[],
    rows: rows as SheetRow[],
  };
}

/**
 * Converts a sheet row to an object using headers as keys
 * @param headers - Array of column headers
 * @param row - Array of cell values
 * @returns Object with header keys and row values
 */
export function rowToObject<T>(
  headers: string[],
  row: SheetRow
): T {
  const obj: Record<string, unknown> = {};

  headers.forEach((header, index) => {
    const value = row[index] ?? '';

    // Try to parse as number if it looks like one
    if (/^\d+(\.\d+)?$/.test(value)) {
      obj[header] = parseFloat(value);
    }
    // Parse boolean strings
    else if (value.toLowerCase() === 'true') {
      obj[header] = true;
    }
    else if (value.toLowerCase() === 'false') {
      obj[header] = false;
    }
    // Keep as string otherwise
    else {
      obj[header] = value;
    }
  });

  return obj as T;
}
