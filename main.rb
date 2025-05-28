# frozen_string_literal: true

require './dictionary'

# The name object that the generator presents the user
class Name
  attr_reader :name

  def initialize(type)
    @type = type
    generate_prefix
    generate_suffix
    @name = @prefix + @suffix
  end

  def generate_prefix
    @prefix = PREFIXES.sample
  end

  def generate_suffix
    case @type
    when 0
      @suffix = SUFFIXES.sample
    when 1
      @suffix = 'kit'
    when 2
      @suffix = 'paw'
    when 3
      @suffix = 'star'
    end
  end
end

warrior_name = Name.new(0)

puts warrior_name.name
