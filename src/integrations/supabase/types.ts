export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      analysis_results: {
        Row: {
          created_at: string
          evidence_suggestions: Json
          extracted_skills: Json
          growth_areas: Json
          id: string
          recommendations: Json
          strengths: Json
          submitted_experience: string
          summary: string
          user_id: string
        }
        Insert: {
          created_at?: string
          evidence_suggestions?: Json
          extracted_skills?: Json
          growth_areas?: Json
          id?: string
          recommendations?: Json
          strengths?: Json
          submitted_experience: string
          summary?: string
          user_id: string
        }
        Update: {
          created_at?: string
          evidence_suggestions?: Json
          extracted_skills?: Json
          growth_areas?: Json
          id?: string
          recommendations?: Json
          strengths?: Json
          submitted_experience?: string
          summary?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_results_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      assessments: {
        Row: {
          answers: Json
          assessment_category: string
          completed_at: string
          completion_status: string
          id: string
          results: Json
          user_id: string
        }
        Insert: {
          answers: Json
          assessment_category?: string
          completed_at?: string
          completion_status?: string
          id?: string
          results: Json
          user_id: string
        }
        Update: {
          answers?: Json
          assessment_category?: string
          completed_at?: string
          completion_status?: string
          id?: string
          results?: Json
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      experiences: {
        Row: {
          created_at: string
          description: string
          end_date: string | null
          id: string
          job_title: string
          organization: string
          start_date: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string
          end_date?: string | null
          id?: string
          job_title: string
          organization?: string
          start_date?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string
          end_date?: string | null
          id?: string
          job_title?: string
          organization?: string
          start_date?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "experiences_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      learning_pathways: {
        Row: {
          category: string
          created_at: string
          description: string
          difficulty: string
          duration: string
          external_url: string | null
          id: string
          illustrative: boolean
          provider: string
          title: string
        }
        Insert: {
          category: string
          created_at?: string
          description: string
          difficulty: string
          duration: string
          external_url?: string | null
          id?: string
          illustrative?: boolean
          provider: string
          title: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          difficulty?: string
          duration?: string
          external_url?: string | null
          id?: string
          illustrative?: boolean
          provider?: string
          title?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          biography: string
          created_at: string
          employer_directory_consent: boolean
          full_name: string
          id: string
          languages: string[]
          location: string
          passport_id: string
          passport_sharing: boolean
          portfolio_links: string[]
          professional_category: string
          professional_title: string
          profile_visibility: string
          share_assessments: boolean
          updated_at: string
        }
        Insert: {
          biography?: string
          created_at?: string
          employer_directory_consent?: boolean
          full_name?: string
          id: string
          languages?: string[]
          location?: string
          passport_id?: string
          passport_sharing?: boolean
          portfolio_links?: string[]
          professional_category?: string
          professional_title?: string
          profile_visibility?: string
          share_assessments?: boolean
          updated_at?: string
        }
        Update: {
          biography?: string
          created_at?: string
          employer_directory_consent?: boolean
          full_name?: string
          id?: string
          languages?: string[]
          location?: string
          passport_id?: string
          passport_sharing?: boolean
          portfolio_links?: string[]
          professional_category?: string
          professional_title?: string
          profile_visibility?: string
          share_assessments?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      qualifications: {
        Row: {
          completion_year: number | null
          created_at: string
          evidence_reference: string
          id: string
          institution: string
          qualification_name: string
          user_id: string
          verification_status: string
        }
        Insert: {
          completion_year?: number | null
          created_at?: string
          evidence_reference?: string
          id?: string
          institution?: string
          qualification_name: string
          user_id: string
          verification_status?: string
        }
        Update: {
          completion_year?: number | null
          created_at?: string
          evidence_reference?: string
          id?: string
          institution?: string
          qualification_name?: string
          user_id?: string
          verification_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "qualifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      saved_pathways: {
        Row: {
          created_at: string
          id: string
          pathway_id: string
          progress_status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          pathway_id: string
          progress_status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          pathway_id?: string
          progress_status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_pathways_pathway_id_fkey"
            columns: ["pathway_id"]
            isOneToOne: false
            referencedRelation: "learning_pathways"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_pathways_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      skills: {
        Row: {
          assessment_status: string
          created_at: string
          evidence_description: string
          id: string
          proficiency_level: string
          skill_category: string
          skill_name: string
          user_id: string
        }
        Insert: {
          assessment_status?: string
          created_at?: string
          evidence_description?: string
          id?: string
          proficiency_level?: string
          skill_category?: string
          skill_name: string
          user_id: string
        }
        Update: {
          assessment_status?: string
          created_at?: string
          evidence_description?: string
          id?: string
          proficiency_level?: string
          skill_category?: string
          skill_name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "skills_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_statistics: { Args: never; Returns: Json }
      employer_directory: { Args: never; Returns: Json[] }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      public_passport: { Args: { _passport_id: string }; Returns: Json }
      safe_passport: { Args: { _id: string }; Returns: Json }
    }
    Enums: {
      app_role: "professional" | "employer" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["professional", "employer", "admin"],
    },
  },
} as const
